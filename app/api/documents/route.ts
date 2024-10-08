import { Dewy } from 'dewy-ts';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Create a Dewy client
const dewy = new Dewy({
    BASE: process.env.DEWY_ENDPOINT,
});

export async function POST(req: Request) {
    // Pull the document's URL out of the request
    const formData = await req.formData();
    const url = formData.get('url');

    if (typeof url !== 'string') {
        return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const document = await dewy.kb.addDocument({
        collection: process.env.DEWY_COLLECTION,
        url,
    });

    return NextResponse.json({ document_id: document.id });
}
