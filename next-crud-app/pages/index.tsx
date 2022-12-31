import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";

interface FormData {
  title: string;
  content: string;
  id: string;
}

interface Notes {
  notes: {
    id: string;
    title: string;
    content: string;
  }[];
}

const Home = ({ notes }: Notes) => {
  const [form, setForm] = useState<FormData>({
    title: "",
    content: "",
    id: "",
  });

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const create = async (data: FormData) => {
    try {
      fetch("http://localhost:3000/api/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        setForm({ title: "", content: "", id: "" });
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      fetch(`http://localhost:3000/api/note/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (data: FormData) => {
    try {
      create(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Notes</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <div>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
              </div>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const notes = await prisma.note.findMany({
    select: {
      title: true,
      id: true,
      content: true,
    },
  });
  return {
    props: {
      notes,
    },
  };
};
