import db from '@/lib/db'; // Use absolute imports with `@` for the `lib` folder

// export async function GET() {
//   const connection = await db();

//   try {
//     const [rows] = await connection.execute('SELECT * FROM users');
//     return new Response(JSON.stringify({ users: rows }), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Internal Server Error', error }), { status: 500 });
//   } finally {
//     connection.end();
//   }
// }

export async function POST(req) {
//   const { name, email } = await req.json();
    const formData = await req.formData(); // Instead of parsing JSON
    const post = formData.get("post");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const headline = formData.get("headline");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const photo = formData.get("photo");
    const summary = formData.get("summary");
    const resume = formData.get("resume");
    const coverletter = formData.get("coverletter");
    // console.log(formData);
    // console.log("Received form data:", {
    //     post,
    //     firstname,
    //     lastname,
    //     email,
    //     headline,
    //     phone,
    //     address,
    //     summary,
    //     coverletter,
    //     photo: photo ? true : false,
    //     resume: resume ? true : false,
    //   });
      
    const photoBuffer = photo ? await photo.arrayBuffer() : null;
    const resumeBuffer = resume ? await resume.arrayBuffer() : null;
  const connection = await db();

  try {
    const [result] = await connection.execute(
        `INSERT INTO 
        form_submissions (post, firstname, lastname, email, headline, phone, address, photo, summary, resume, coverletter) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            post, 
            firstname, 
            lastname, 
            email, 
            headline, 
            phone, 
            address, 
            photoBuffer, 
            summary, 
            resumeBuffer, 
            coverletter
        ]
    );
    return new Response(JSON.stringify({ message: 'User created', id: result.insertId }), { status: 201 });
  } catch (error) {
    // console.error('Error during database operation:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', error }), { status: 500 });
  } finally {
    connection.end();
  }
}
