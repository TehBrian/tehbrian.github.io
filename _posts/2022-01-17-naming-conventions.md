---
layout: minimal
title: "Naming Conventions"
description: "Because there aren't enough references on the internet, right?"
---

# naming conventions

|              | commonly used in |
| ------------ | ---------------: |
| `PascalCase` |               C# |
| `camelCase`  |             Java |
| `snake_case` |           Python |
| `kebab-case` |             YAML |

Although a Java developer, I've come to prefer snake case (or kebab case) because of two reasons:

1. **Pascal case and camel case make one letter words ugly.** For example, `just_a_variable`
   is much more readable than `justAVariable`.

2. **Acronyms aren't ambiguous as to whether you capitalize all letters or just the first.** For example,
   "our lovely HTML parser" in camel case could be either `ourLovelyHtmlParser` or `ourLovelyHTMLParser`.
   People get into big fusses about which one is correct. Snake case has no such ambiguity: `our_html_parser`.

3. **Separating words by a character allows case to be meaningful.** For example, `my_friend_Brian`
   signifies that Brian is a proper noun, whereas `myFriendBrian` makes no such distinction. (Some might
   oppose to uppercase letters in lower snake case, though, and that would be valid criticism.)

For snake case, use underscores to separate **words**, not capital letters. The same logic applies to
kebab case using dashes. For example, do not convert `MiniMessage` to `mini_message`; instead,
convert it to `minimessage`. However, `Mini Message` would be rightfully converted to `mini_message`.

## examples

| word            | pascal        | camel         | snake           | kebab           |
| --------------- | ------------- | ------------- | --------------- | --------------- |
| Just A Variable | JustAVariable | justAVariable | just_a_variable | just-a-variable |
| MiniMessage     | MiniMessage   | miniMessage   | minimessage     | minimessage     |
| our HTML parser | OurHtmlParser | ourHtmlParser | our_html_parser | our-html-parser |

## upper case

Since snake case and kebab case are not dependent on lower or uppercase characters, there
are uppercase variations on them, called upper snake case (or upper kebab case). To differentiate
between upper snake case and non-upper snake case, snake case is also called lower snake case -
the same applies for kebab case.

|                    | commonly used in |
| ------------------ | ---------------: |
| `UPPER_SNAKE_CASE` |             Java |
| `lower_snake_case` |           Python |
| `UPPER-KEBAB-CASE` |                ? |
| `lower-kebab-case` |             YAML |

Upper snake case (or upper kebab case) is also sometimes called screaming snake case (or screaming kebab case).
