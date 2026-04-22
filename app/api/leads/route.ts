import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";

// In-memory store (mock DB)
interface Lead {
  id: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  message?: string;
  createdAt: string;
}

const leadsStore: Lead[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation with Zod
    const result = leadFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, workEmail, companyName, teamSize, message } = result.data;

    // Create new lead
    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      fullName,
      workEmail,
      companyName,
      teamSize,
      message,
      createdAt: new Date().toISOString(),
    };

    // Store in mock DB
    leadsStore.push(newLead);

    // Log for debugging (remove in production)
    console.log(`[Lead Captured] ID: ${newLead.id} | Company: ${companyName} | Email: ${workEmail}`);
    console.log(`[Total Leads] ${leadsStore.length}`);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        leadId: newLead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Lead API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      count: leadsStore.length,
      leads: leadsStore,
    },
    { status: 200 }
  );
}
