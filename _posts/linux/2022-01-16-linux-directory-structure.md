---
layout: post
title: "Linux Directory Structure"
description: "Notes for me because I'm a dummy."
category: Linux
---

I often find myself forgetting Linux's directory structure and its
cryptic names, so this document serves as a quick reference for me.
Who knows, maybe someone else will find it useful as well?

Heads up: `(vfs)` indicates that the directory is a virtual file system
and does not contain "real" files. I didn't verify all of the `vfs`
marks, though, so do your own research.

_(Also, you can interpret "binaries" as executables or programs.)_

| directory | naming justification              |                 extra notes |       |
| --------- | --------------------------------- | --------------------------: | ----- |
| `/usr`    | **us**e**r** binaries             |                             |       |
| `/bin`    | **bin**aries                      |                             |       |
| `/sbin`   | **s**ystem **bin**aries           |             (for sysadmins) |       |
| `/lib`    | shared **lib**raries              |       (for binaries to use) |       |
| `/opt`    | **opt**ional third-party binaries |                             |       |
| `/home`   | users' **home** directories       | (default current directory) |       |
| `/root`   | **root** user's home directory    |                             |       |
| `/boot`   | **boot**loader files              |           (kernels, initrd) |       |
| `/etc`    | configuration files               |      (for system, services) |       |
| `/srv`    | **s**e**rv**er files              |        (HTTP, FTP services) |       |
| `/var`    | **var**iable data                 |   (log files, print queues) |       |
| `/tmp`    | **t**e**mp**orary files           | (usually cleared on reboot) |       |
| `/mnt`    | **m**ou**nt**ed file systems      |                             |       |
| `/proc`   | running **proc**esses             |                             | (vfs) |
| `/sys`    | **sys**fs                         |        (device/driver info) | (vfs) |
| `/dev`    | **dev**ices                       |                     (disks) | (vfs) |
| `/media`  | **media** devices                 |     (removable media, USBs) | (vfs) |

Of course, there are more directories, but these are the basic ones you should know,
and any more involved directories (such as `/lost+found`, `/run`) can be googled by you.

## extra notes

The distinction between `/usr`, `/bin`, `/sbin`, `/lib`, and `/opt` is muddied and I don't really
understand it. As with most decade-old+ software, a lot of the ambiguity has to do with historical reasons.
[Here's a good discussion](https://askubuntu.com/questions/130186/what-is-the-rationale-for-the-usr-directory)
I found on the matter.

must be on root partition:

-   `/bin`
-   `/etc`
-   `/proc`

must be on same partition:

-   `/dev`
-   `/lib`
-   `/sbin`

make a separate partition for:

-   `/`
-   `swap space`

also recommended to make a partition for:

-   `/home` (so users can't fill important drives)
-   `/var` (can fill up with lots of data)
