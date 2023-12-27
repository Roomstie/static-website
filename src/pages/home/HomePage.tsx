import { homepage1, homepageConnection } from "assets";
import { Button } from "components/button";
import { TARGET_HOME, TARGET_TEAM } from "config";

export const HomePage = (): JSX.Element => (
  <div className="max-w-container mt-12 flex flex-col">

    <section
      className="flex sm:flex-col lg:flex-row items-center space-x-8"
      id={TARGET_HOME}
    >
      <div className="flex flex-col lg:w-1/2 sm:w-full space-y-6">
        <h1 className="text-7xl font-bold">
          Stop Searching,
          <br />
          Start Matching.
        </h1>
        <p className="text-xl">
          Tired of sifting through endless roommate and room listings?
          Whether you&apos;re offering a room or seeking one, we ensure matches that are more than
          just about finding the right room - it&apos;s about great company too.
          Stop searching and take our survey to start matching.
        </p>
        <div className="flex flex-row justify-center">
          <a href="" target="_blank" rel="noreferrer">
            <Button label="Take our survey" size="xl" />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full">
        <img src={homepage1.default} className="w-full max-w-[80vw]" alt="Connexion Roomstie Graph" />
      </div>
    </section>

    <section
      className="bg-purple-700 text-white flex flex-col space-y-4"
      id={TARGET_TEAM}
    >
      <h2 className="text-4xl">Whom is it for?</h2>
      <p className="text-lg text-center">
        Whether you are looking for a room, a roommate, or both,
        Roomstie is the one-stop shop for all! Take our survey and tell us all about you.
        Then, kick back and chill - we&apos;ll do the magic and ping you with your match.
      </p>
      <img src={homepageConnection.default} className="h-[10rem]" />
    </section>

  </div>
);
