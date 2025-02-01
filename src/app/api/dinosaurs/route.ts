import data from "./data.json" with { type: "json" };

export async function GET() {
    return Response.json(data);
}
