import { NextRequest } from "next/server";
import data from "../data.json" with { type: "json" };

type RouteParams = { params: Promise<{ dinosaur: string }> };

export const GET = async (request: NextRequest, { params }: RouteParams) => {
    const { dinosaur } = await params;

    if (!dinosaur) {
        return Response.json("No dinosaur name provided.");
    }

    const dinosaurData = data.find((item) =>
        item.name.toLowerCase() === dinosaur.toLowerCase()
    );

    return Response.json(dinosaurData ? dinosaurData : "No dinosaur found.");
};
