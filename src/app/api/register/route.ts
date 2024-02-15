import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const user = "ratos" //params.user;
  const map={dog:'body'};
  const message= `Welcome to my Next application, user: ${user}`
  try {
  
  return new Response(JSON.stringify(map));
  } catch (error) {
    console.error(error);
    //res.status(500).json({ message: `Internal error, but message ${message} works  ` });
  }
  
  
}

 export async function HEAD(Request:any) {}
// export async function POST(Request) {}
 export async function PUT(Request:any) {}
 export async function DELETE(Request:any) {}
export  async function POST(Request:any,res:any/*req: NextApiRequest, res: NextApiResponse*/) {
  // Handle the POST request
  //res.status(200).json('looks like it works?');
}
