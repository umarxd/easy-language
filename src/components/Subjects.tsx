import Link from "next/link";

export default function Subjects() {
  return (
    <div className="mt-4 flex flex-wrap gap-3 w-2/3 flex-shrink justify-center">
      <div>
        <Link
          className="text-blue-500 hover:text-blue-100"
          href={"/learn/verbs"}
        >
          Verbs and Verb Tenses
        </Link>
        <p>
          Action verbs, express what is happening (do, work). State verbs
          express a situation (be, have).
        </p>
      </div>
      <div>
        <Link
          className="text-blue-500 hover:text-blue-100"
          href={"/learn/adjectives"}
        >
          Adjectives
        </Link>
        <p>
          An adjective is a word that tells us more about a noun (big, red,
          expensive).
        </p>
      </div>
      <div>
        <Link
          className="text-blue-500 hover:text-blue-100"
          href={"/learn/adverbs"}
        >
          Adverbs
        </Link>
        <p>
          Adverbs tell us more about verbs, adjectives or adverbs (loudly,
          really, extremely).
        </p>
      </div>
      <div>
        <Link
          className="text-blue-500 hover:text-blue-100"
          href={"/determiners"}
        >
          Determiners
        </Link>
        <p>
          Determiners are words like the, an, this that start a noun phrase.
        </p>
      </div>
      <div>
        <Link className="text-blue-500 hover:text-blue-100" href={"/pronouns"}>
          Pronouns
        </Link>
        <p>
          Pronouns are small words like you, ours, some that can take the place
          of a noun.
        </p>
      </div>
      <div>
        <Link
          className="text-blue-500 hover:text-blue-100"
          href={"/conjunctions"}
        >
          Conjunctions
        </Link>
        <p>Conjunctions join two parts of a sentence (and, but, though).</p>
      </div>
      <div>
        <Link
          className="text-blue-500 hover:text-blue-100"
          href={"/interjections"}
        >
          Interjections
        </Link>
        <p>Short exclamations with no real grammatical value (ah, dear, er)</p>
      </div>
    </div>
  );
}
