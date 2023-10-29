export default function Adverbs() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center mx-4">
      <p>
        Adverbs are words that modify verbs, adjectives, or other adverbs. They
        provide more information about how, when, where, or to what extent an
        action is performed. Here is a breakdown of adverbs in English:
      </p>

      <div className="mt-4">
        <ul>
          <li className="font-bold border-b w-fit text-blue-400">
            <h2>Types of Adverbs:</h2>
          </li>
          <li className="font-bold">
            <h4>1. Adverbs of Manner:</h4>
          </li>
          <li className="ml-6">
            <p>These adverbs describe how an action is done.</p>
            <p>Examples: quickly, silently, happily, carefully</p>
            <p>Example Sentence: She sings beautifully.</p>
          </li>
          <li className="font-bold">
            <h4>2. Adverbs of Frequency:</h4>
          </li>
          <li className="ml-6">
            <p>These adverbs indicate how often an action occurs.</p>
            <p>Examples: always, often, sometimes, rarely, never</p>
            <p>Example Sentence: He always arrives on time.</p>
          </li>
          <li className="font-bold">
            <h4>3. Adverbs of Time:</h4>
          </li>
          <li className="ml-6">
            <p>These adverbs indicate when an action happens.</p>
            <p>Examples: now, soon, today, later, yesterday</p>
            <p>Example Sentence: I will do it tomorrow.</p>
          </li>
          <li className="font-bold">
            <h4>4. Adverbs of Place:</h4>
          </li>
          <li className="ml-6">
            <p>These adverbs indicate where an action happens.</p>
            <p>Examples: here, there, everywhere, inside, outside</p>
            <p>Example Sentence: The keys are here.</p>
          </li>
          <li className="font-bold">
            <h4>5. Adverbs of Degree:</h4>
          </li>
          <li className="ml-6">
            <p>
              These adverbs modify adjectives or other adverbs to indicate the
              degree or intensity of an action.
            </p>
            <p>Examples: very, too, quite, almost, enough</p>
            <p>Example Sentence: She is very intelligent.</p>
          </li>
          <li className="font-bold">
            <h4>6. Interrogative Adverbs:</h4>
          </li>
          <li className="ml-6">
            <p>
              These adverbs are used to ask questions about manner, time, place,
              etc.
            </p>
            <p>Examples: how, when, where, why</p>
            <p>Example Sentence: Why are you late?</p>
          </li>
        </ul>

        <div className="mt-4">
          <h2 className="font-bold border-b w-fit text-blue-400">
            Adverb Placement:
          </h2>

          <ul className="mt-4">
            <li className="font-bold">
              <h4>1. Adverbs Modifying Verbs:</h4>
            </li>
            <li className="ml-6">
              <p>
                Adverbs that modify verbs are usually placed after the verb.
              </p>
              <p>
                Example: He speaks English
                <span className="font-bold"> fluently.</span>
              </p>
            </li>
            <li className="font-bold">
              <h4>2. Adverbs Modifying Adjectives or Other Adverbs:</h4>
            </li>
            <li className="ml-6">
              <p>
                Adverbs that modify adjectives or other adverbs are usually
                placed before the adjective or adverb.
              </p>
              <p>
                Example: She is <span className="font-bold"> extremely </span>
                talented.
              </p>
            </li>
            <li className="font-bold">
              <h4>3. Adverbs of Frequency::</h4>
            </li>
            <li className="ml-6">
              <p>
                Adverbs of frequency are usually placed before the main verb
                except in the case of the verb to be.
              </p>
              <p>
                Example: She <span className="font-bold"> always </span> does
                her homework.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <h2 className="font-bold border-b w-fit text-blue-400">
            Comparative and Superlative Forms:
          </h2>
          <p>
            <span className="font-bold ">Comparative Adverbs</span>: Many
            adverbs form the comparative by adding -er.
          </p>
          <p className="ml-6">Example: He runs faster than his friend.</p>
          <p>
            <span className="font-bold">Superlative Adverbs</span>: Many adverbs
            form the superlative by adding -est.
          </p>
          <p className="ml-6">
            Example: She sings most beautifully of all the contestants.
          </p>
        </div>
      </div>
      <div className="my-4 text-sm">
        Remember, adverbs add depth and detail to your sentences, allowing you
        to convey a more precise message. Practice using different adverbs in
        various contexts to enhance your English language skills.
      </div>
    </div>
  );
}
