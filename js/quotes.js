const quotes = [
  {
    quote:
      "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    author: "Joshua 1:9",
  },
  {
    quote: "For God’s gifts and his call are irrevocable.",
    author: "Romans 11:29",
  },
  {
    quote: "I can do all this through him who gives me strength.",
    author: "Philippians 4:13",
  },
  {
    quote:
      "But who are you, a human being, to talk back to God? “Shall what is formed say to the one who formed it, Why did you make me like this?",
    author: "Romans 9:20",
  },
  {
    quote:
      "Does not the potter have the right to make out of the same lump of clay some pottery for special purposes and some for common use?",
    author: "Romans 9:21",
  },
  {
    quote:
      "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    author: "Lamentations 3:22-23",
  },
  {
    quote:
      "What, then, shall we say in response to these things? If God is for us, who can be against us?",
    author: "Romans 8:31",
  },
  {
    quote:
      "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
    author: "Psalm 27:1",
  },
  {
    quote:
      "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
    author: "1 John 4:18",
  },
  {
    quote:
      "Jesus looked at them and said, 'With man it is impossible, but not with God. For all things are possible with God.'",
    author: "Mark 10:27",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
