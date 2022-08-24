---
layout: post
title: "No Black Sky"
description: "How to make your Minecraft world's horizon not ugly."
---

If you've ever gone below Y60 or so in your Minecraft world, you might've
noticed that the horizon of your beautiful sky turns black.

This is fine in *most* Minecraft worlds; however, in some scenarios, such as
void worlds, it looks terribly ugly.

People have been dealing with this problem for a while. See example
[1](https://www.spigotmc.org/threads/how-to-avoid-sky-turning-black-below-y-60.367113/),
[2](https://www.reddit.com/r/admincraft/comments/i0e57d/how_do_i_get_rid_of_the_black_sky_this_is_really/).

This short post explains *why* this happens, and *how* you can fix it.

## Why does this happen?

#getHorizon

## Option 1. Install NoBlackSky

A Spigot plugin called [NoBlackSky](https://www.spigotmc.org/resources/no-black-sky-1-8-8-1-18-x-for-void-world.25337/)
fixes this issue. Simply install the plugin alongside ProtocolLib, add your world
via `/nbs add <world>`, relog, and voilá, your sky is beautiful again!

This option is great if you'd just like to get rid of that darned black sky.
However, if you'd like to learn the inner-workings of what's going on and
fix it yourself, follow along.

## Option 2. Generate worlds with world type FLAT

"But!" you might cry. "But I already generated my world! What do I do now!?" If
this is your situation, read to option 3.

## Option 3. Edit the level.dat NBT data of your world
If you've already generated, you'll have to take a different approach than simply
having generated your world with world type flat (unless you have a time machine
and can reverse your terrible mistake).

You may just want to turn back now and go with option 1. However, for the
brave-hearted of us, continue reading on.

[This question on StackExchange](https://gaming.stackexchange.com/questions/98698/change-existing-world-to-superflat-server)
explains *what* to do but not how. Here's how:


