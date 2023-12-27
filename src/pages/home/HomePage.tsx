import { imageAIHouse, imageAIMachine, imageHomepage1, imageHomepageConnection } from "assets";
import { Button } from "components/button";
import { Feature } from "components/feature";
import { PAGE_NAME } from "config";

export const HomePage = (): JSX.Element => (
  <div className="flex flex-col">

    <section
      className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0 landing-spacing max-w-container"
    >
      <div className="flex flex-col lg:w-1/2 w-full space-y-16">
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
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <img src={imageHomepage1.default} className="w-full max-w-[80vw]" alt="Connexion Roomstie Graph" />
      </div>
    </section>

    <section
      className="bg-purple-700 text-white w-screen flex flex-col items-center"
    >
      <div className="max-w-2xl flex flex-col space-y-8 py-16 items-center">
        <h2 className="text-5xl font-bold">Whom is it for?</h2>
        <p className="text-lg text-center">
          Whether you are looking for a room, a roommate, or both,
          Roomstie is the one-stop shop for all! Take our survey and tell us all about you.
          Then, kick back and chill - we&apos;ll do the magic and ping you with your match.
        </p>
        <img src={imageHomepageConnection.default} className="h-[10rem]" />
      </div>
    </section>

    <section className="landing-spacing max-w-container flex flex-col space-y-16 items-center">
      <h2 className="text-5xl font-bold">Why choose {PAGE_NAME}?</h2>

      <div className="max-w-2xl flex flex-col space-y-12">
        <Feature
          className="bg-yellow-700 text-primary"
          header="It's all about the data"
          text="At the heart of Roomstie is our proprietary machine-learning algorithm. It's smartly designed to analyze your survey responses, ensuring precise matches between room providers and seekers for the best living experience."
          icon={imageAIMachine}
        />
        <Feature
          className="flex-row-reverse bg-gray-800 text-primary"
          header="We get personal"
          text="The Roomstie team is hands-on! We will personally reach out to you with your matches. You can connect with them directly through email or phone – making connections simple and safe."
          icon={imageAIHouse}
        />
      </div>
    </section>

  </div>
);
