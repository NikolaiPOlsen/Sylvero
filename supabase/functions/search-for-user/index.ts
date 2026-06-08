Deno.serve(async (req)=>{
  const { phone } = await req.json();
  const boardId = Deno.env.get("TRELLO_BOARD");
  if (!boardId || !phone) {
    return new Response(JSON.stringify({
      error: "BoardId and phonenumber are required"
    }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const key = Deno.env.get("TRELLO_KEY");
  const token = Deno.env.get("TRELLO_TOKEN");
  const url = `https://api.trello.com/1/search?query=${encodeURIComponent(phone)}&idBoards=${boardId}&modelTypes=cards&cards_limit=20&key=${key}&token=${token}`;
  const response = await fetch(url, {
    method: "POST"
  });
  const data = await response.json();
  if (!response.ok) {
    console.error("Trello error:", response.status, JSON.stringify(data));
    return new Response(JSON.stringify({
      error: data?.message || "Trello request failed",
      status: response.status
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
});
