import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");

    // Leer el contenido del archivo
    const fileContent = await file.text();

    const filePath = path.join(process.cwd(), "public", file.name);
    writeFile(filePath, fileContent);

    return new Response(
      JSON.stringify({
        message: "File uploaded and read succesfully",
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `Error ${error}`,
      })
    );
  }
}
