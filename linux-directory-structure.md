---
layout: none
title: Linux Directory Structure
description: Notes for me because I'm a dummy.
---

# Notes on Linux Directory Structure Notes

I often find myself forgetting Linux's directory structure and its
cryptic names, so this document serves as a quick reference for me.
Who knows, maybe someone else will find it useful as well?

Heads up: `(vfs)` indicates that the directory is a virtual file system
and does not contain "real" files. I didn't verify all of the `vfs`
marks, though, so your own research.

| directory | naming justification              | extra notes                  |     |
|-----------|-----------------------------------|-----------------------------:|-----|
| `/bin`    | **bin**ary executable programs    |                              |     |
| `/sbin`   | **s**ystem **bin**ary programs    | (intended for sysadmins)     |     |
| `/usr`    | **us**e**r** programs             |                              |     |
| `/lib`    | shared **lib**raries              | (for programs to use)        |     |
| `/home`   | **home** directory                | (default current directory)  |     |
| `/opt`    | **opt**ional third-party software |                              |     |
| `/tmp`    | **t**e**mp**orary files           | (usually cleared on reboot)  |     |
| `/etc`    | system configuration files        |                              |     |
| `/srv`    | **s**e**rv**er files              | (HTTP, FTP services)         |     |
| `/var`    | **var**iable data                 | (log files, print queues)    |     |
| `/boot`   | linux **boot** files              | (kernal, bootloader files)   |     |
| `/dev`    | connected **dev**ices             |                              |(vfs)|
| `/media`  | connected **media** devices       | (removable media, e.g. USBs) |(vfs)|
| `/proc`   | running **proc**esses             |                              |(vfs)|
| `/sys`    | **sys**fs                         | (device/driver info)         |(vfs)|

Of course, there are more, but these are the basic ones you should know,
 and any more involved directories (such as `/lost+found`) can be googled by you.

## extra notes

must be on same partition:
- `/bin`
- `/sbin`
- `/lib`
- `/dev`
- `/etc`
- `/proc`

make a separate partition for:
- `/`
- `swap space`

also recommended to make partition for:
- `/home`
- `/var`
