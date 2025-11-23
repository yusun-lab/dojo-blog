import { ref } from "vue";

interface Post {
  id: number;
  title: string;
  body: string;
}

const getPost = (id: string | number) => {
  const post = ref<Post | null>(null);
  const error = ref<string | null>(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw new Error("that post doesn't exist");
      }
      post.value = await data.json();
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "An unknown error occurred";
      }
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
