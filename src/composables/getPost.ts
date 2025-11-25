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
      let data = await fetch("/data/db.json");
      if (!data.ok) {
        throw new Error("that post doesn't exist");
      }
      const json = await data.json();
      post.value = await json.posts.find(
        (p: any) => p.id.toString() === id.toString()
      );
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
