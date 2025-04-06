// app/api/section/route.ts
import { NextResponse } from "next/server";
import { resourcesByCategory } from "@/data/resources";
import { manifestoContent } from "@/assets/manifestoSections";


// Define types for your sections
interface ResourceSection {
  id: string;
  parent: string;
  label: string;
}

interface ManifestoSection {
  id: string;
  title: string;
  // Add other properties if they exist in your manifesto sections
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (!type) {
    return NextResponse.json(
      { error: "Type parameter is required" },
      { status: 400 }
    );
  }

  try {
    let sections: ResourceSection[] = [];

    if (type === "recursos") {
      sections = Object.keys(resourcesByCategory).map((category: string) => ({
        id: `item-${category}`,
        parent: "recursos",
        label: category,
      }));
    } else if (type === "manifesto") {
      sections = manifestoContent.sections.map((section: ManifestoSection) => ({
        id: section.id,
        parent: "manifesto",
        label: section.title,
      }));
    }

    return NextResponse.json(sections, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error generating sections:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
