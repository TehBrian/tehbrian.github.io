---
layout: post
title: "Linux Help"
description: "Cheatsheet for how to get help within linux."
category: Linux
---

In Linux, there are various programs which provide help with Linux and Linux commands.
With how many options there are, it can be difficult to decide which program to use.
Here's a quick cheat sheet to make that decision a bit easier.

| command    | information database | description                                         |
| ---------- | -------------------- | --------------------------------------------------- |
| man        | man pages            | **man**ual pages for commands, directories, systems |
| info       | info nodes           | man pages but more verbose and instructional        |
| -h, --help | the command          | command option that displays syntax and options     |
| help       | help                 | for commands built-in to the Linux shell            |
| whatis     | whatis database      | one-line description of a given command             |
| apropos    | whatis database      | whatis but allows partial command matches           |

Man pages are included when installing software.

The whatis database is built from man pages. To initially build the database, run `/usr/sbin/makewhatis`.
If the man pages are updated, the whatis database won't automatically update. To update
the database, run `makewhatis -u` (or `whatisupdate` on some systems).
