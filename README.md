# taskify
 ✨ Taskify — Smart Task Manager 

Taskify is a lightweight and modern **task management web app** built with **HTML, CSS, and JavaScript**.  
It includes a simple **login system** based on email and a **persistent task list** stored locally in the browser — no backend required!


🚀 Features

✅ Elegant and responsive UI  
✅ Login system (per user, by email)  
✅ Add, edit, and delete tasks  
✅ Tasks saved locally (persistent history)  
✅ Works fully offline — no database or server  
✅ Auto-loads user-specific tasks on login  
✅ Beautiful gradients, animations, and transitions  

 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Storage** | Browser LocalStorage |
| **Styling** | Poppins font + gradient backgrounds + card UI |
| **Animation** | CSS transitions and keyframes |

🧠 How It Works

Each user logs in using their **email address**.  
- When you log in, the app saves your email in `localStorage` as the current user.  
- All your tasks are stored under your email ID (so multiple users can use the same browser).  
- When you return and log in again, the app retrieves your tasks automatically.

Example data stored in LocalStorage:
```json
{
  "currentUser": "you@example.com",
  "you@example.com": ["Finish project", "Buy groceries"]
}
