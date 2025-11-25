import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref<string | null>(null);

  const load = async () => {
    try {
      let data = await fetch("/data/db.json");
      if (!data.ok) {
        throw new Error("no data available");
      }
      const json = await data.json();
      posts.value = json.posts;
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "An unknown error occurred";
      }
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
