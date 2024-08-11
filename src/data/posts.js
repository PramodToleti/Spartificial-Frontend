const posts = [
  {
    post_id: 1,
    caption: "Beautiful sunset!",
    media_url: "https://example.com/media/sunset.jpg",
    published_time: new Date().toISOString(),
  },
  {
    post_id: 2,
    caption: "Had a great time at the beach.",
    media_url: "https://example.com/media/beach.jpg",
    published_time: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 3,
    caption: "Just cooked a delicious meal.",
    media_url: "https://example.com/media/meal.jpg",
    published_time: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 4,
    caption: "Enjoying the city lights.",
    media_url: "https://example.com/media/city.jpg",
    published_time: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 5,
    caption: "Mountain hiking adventure.",
    media_url: "https://example.com/media/mountain.jpg",
    published_time: new Date().toISOString(),
  },
  {
    post_id: 6,
    caption: "Reading a great book.",
    media_url: "https://example.com/media/book.jpg",
    published_time: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 7,
    caption: "Exploring a new city.",
    media_url: "https://example.com/media/city2.jpg",
    published_time: new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 8,
    caption: "Lovely garden flowers.",
    media_url: "https://example.com/media/flowers.jpg",
    published_time: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 9,
    caption: "A day at the zoo.",
    media_url: "https://example.com/media/zoo.jpg",
    published_time: new Date().toISOString(),
  },
  {
    post_id: 10,
    caption: "Watching the stars.",
    media_url: "https://example.com/media/stars.jpg",
    published_time: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 11,
    caption: "Delicious homemade pizza.",
    media_url: "https://example.com/media/pizza.jpg",
    published_time: new Date(Date.now() - 50 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 12,
    caption: "Playing the guitar.",
    media_url: "https://example.com/media/guitar.jpg",
    published_time: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 13,
    caption: "Afternoon tea.",
    media_url: "https://example.com/media/tea.jpg",
    published_time: new Date().toISOString(),
  },
  {
    post_id: 14,
    caption: "Sunrise over the ocean.",
    media_url: "https://example.com/media/sunrise.jpg",
    published_time: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 15,
    caption: "City skyline at night.",
    media_url: "https://example.com/media/skyline.jpg",
    published_time: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 16,
    caption: "Exploring the forest.",
    media_url: "https://example.com/media/forest.jpg",
    published_time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 17,
    caption: "Baking cookies.",
    media_url: "https://example.com/media/cookies.jpg",
    published_time: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 18,
    caption: "Day at the museum.",
    media_url: "https://example.com/media/museum.jpg",
    published_time: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
  },
  {
    post_id: 19,
    caption: "Walking the dog.",
    media_url: "https://example.com/media/dog.jpg",
    published_time: new Date().toISOString(),
  },
  {
    post_id: 20,
    caption: "Making a sandcastle.",
    media_url: "https://example.com/media/sandcastle.jpg",
    published_time: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString(),
  },
];

export const calculateTotalPosts = () => {
  return posts.length;
};

export const calculatePostsInLast24Hours = () => {
  return posts.filter((post) => {
    const postTime = new Date(post.published_time);
    const currentTime = new Date();
    const timeDifference = currentTime - postTime;
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    return hoursDifference <= 24;
  }).length;
};

export default posts;
