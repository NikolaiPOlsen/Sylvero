Deno.serve(async (req) => {
    const { idList, name, desc } = await req.json();

    if (!idList || !name) {
        return new Response(JSON.stringify({ error: "idList and name are required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const key = Deno.env.get("TRELLO_KEY");
    const token = Deno.env.get("TRELLO_TOKEN");

    const url = `https://api.trello.com/1/cards?idList=${idList}&name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc ?? "")}&key=${key}&token=${token}`;

    const response = await fetch(url, { method: "POST" });

    const data = await response.json();
    if (!response.ok) {
        console.error("Trello error:", response.status, JSON.stringify(data));
        return new Response(JSON.stringify({ error: data?.message || "Trello request failed", status: response.status }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
});
