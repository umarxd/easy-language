export default function Adjectives() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center mx-4">
      <p>
        Adjectives are words that describe or modify nouns (people, places,
        things, or ideas) by providing more information about their qualities or
        attributes. Adjectives help make your writing more vivid and
        descriptive. Here's what you need to know about adjectives in English:
      </p>

      <div className="mt-4">
        <ul>
          <li className="font-bold border-b w-fit text-blue-400">
            <h2>Types of Adjectives:</h2>
          </li>
          <li className="font-bold">
            <h4>1. Descriptive Adjectives:</h4>
          </li>
          <li className="ml-6">
            <p>
              These adjectives describe the qualities or characteristics of a
              noun.
            </p>
            <p>
              <span className="font-bold">Example:</span> beautiful, smart,
              tall, red, expensive
            </p>
          </li>
          <li className="font-bold">
            <h4>2. Quantitative Adjectives:</h4>
          </li>
          <li className="ml-6">
            <p>
              These adjectives indicate the quantity or how much of the noun
              there is.
            </p>
            <p>
              <span className="font-bold">Example:</span> some, many, few,
              several
            </p>
          </li>
          <li className="font-bold">
            <h4>3. Demonstrative Adjectives:</h4>
          </li>
          <li className="ml-6">
            <p>These adjectives indicate which noun you are referring to.</p>
            <p>
              <span className="font-bold">Example:</span> this, that, these,
              those
            </p>
          </li>
          <li className="font-bold">
            <h4>4. Possessive Adjectives:</h4>
          </li>
          <li className="ml-6">
            <p>These adjectives show ownership or possession of the noun.</p>
            <p>
              <span className="font-bold">Example:</span> my, your, his, her,
              our, their
            </p>
          </li>
          <li className="font-bold">
            <h4>5. Interrogative Adjectives::</h4>
          </li>
          <li className="ml-6">
            <p>
              These adjectives are used in questions to ask about a specific
              noun.
            </p>
            <p>
              <span className="font-bold">Example:</span> which, what, whose
            </p>
          </li>
          <li className="font-bold">
            <h4>6. Indefinite Adjectives:</h4>
          </li>
          <li className="ml-6">
            <p>These adjectives refer to nonspecific nouns.</p>
            <p>
              <span className="font-bold">Example:</span> some, any, several,
              all
            </p>
          </li>
        </ul>

        <div className="mt-4">
          <h2 className="font-bold border-b w-fit text-blue-400">
            Adjective Placement:
          </h2>
          <p>
            In English, adjectives are usually placed before the noun they
            modify. For example:
          </p>
          <ul className="mt-4">
            <li>
              She has a <span className="font-bold">beautiful</span> garden.
            </li>
            <li>
              He bought an <span className="font-bold">expensive</span> car.
            </li>
          </ul>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <h2 className="font-bold border-b w-fit text-blue-400">
            Comparative and Superlative Forms:
          </h2>
          <p>
            <span className="font-bold">Comparative Adjectives</span>: Used to
            compare two nouns. Typically, you add -er to the end of the
            adjective.
          </p>
          <p>Example: The taller boy won the race.</p>
          <p>
            <span className="font-bold">Superlative Adjectives</span>: Used to
            compare three or more nouns. Typically, you add -est to the end of
            the adjective.
          </p>
          <p>Example: She is the smartest student in the class.</p>
        </div>

        <div className="mt-4">
          <h2 className="font-bold border-b w-fit text-blue-400 mb-2">
            Irregular Comparative and Superlative Forms:
          </h2>
          <p>
            Some adjectives have irregular comparative and superlative forms.
            For example:
          </p>

          <ul className="my-4">
            <li>
              <span className="font-bold">Good</span> (comparative: better,
              superlative: best)
            </li>
            <li>
              <span className="font-bold">Bad</span> (comparative: worse,
              superlative: worst)
            </li>
            <li>
              <span className="font-bold">Far</span> (comparative:
              farther/further, superlative: farthest/furthest)
            </li>
          </ul>
        </div>
      </div>

      <div className="my-4 text-sm">
        Remember, using adjectives effectively can make your writing more
        engaging and provide a clearer picture to your readers. Practice using
        different adjectives in sentences to improve your descriptive writing
        skills.
      </div>
    </div>
  );
}
