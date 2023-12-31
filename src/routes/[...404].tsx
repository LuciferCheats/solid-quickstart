import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Madarchod Saale</Title>
      <HttpStatusCode code={404} />
      <h1>Madarchod Saale</h1>
      <p>
        Visit{" "}
        <a href="https://telegram.me/Lucifer_Owner_Exe" target="_blank">
          https://telegram.me/Lucifer_Owner_Exe
        </a>{" "}
        Papa Hai Beta
      </p>
    </main>
  );
}
