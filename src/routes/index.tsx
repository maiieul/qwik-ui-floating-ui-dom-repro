import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@qwik-ui/headless";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <AccordionRoot class="accordion-wrapper" animated>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger class="accordion-trigger">
              <span>Can I add headings inside the accordion?</span>
              <span>SVG</span>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="accordion-content">
            <p>
              Yes, if you wrap the AccordionHeader component around the trigger,
              screen readers will announce it properly.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger class="accordion-trigger">
              <span>Is it easy to animate?</span>
              <span>SVG</span>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="accordion-content">
            <p>
              Yup! You can even use animations or CSS transitions using the{" "}
              <strong>animated</strong> prop on the accordion root!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger class="accordion-trigger">
              <span>How about opening multiple items at once?</span>
              <span>SVG</span>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="accordion-content">
            <p>
              You can do that by setting the <strong>behavior</strong> prop to
              "multi" on the Accordion
            </p>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
