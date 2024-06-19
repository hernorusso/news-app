const GET = (request) => {
  console.log(request);
  const response = new Response("Hello!");
  return response;
};

export { GET };
