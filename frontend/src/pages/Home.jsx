import UserForm from "../components/UserForm";
import Weather from "../components/Weather";

export default function Home() {
  return (
    <>
      <p>Home Page</p>
      <UserForm />
      <Weather city="Paris" />
    </>
  );
}
