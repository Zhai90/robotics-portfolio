const data = {
    id: 3,
    title: "The Future",
    category: [2],
    createdAt: 1723168959000,
    description: "What's waiting in the future? Let's find out.",
    thumbnail:
        "https://i.imgur.com/CY2dtxr.png",
    content: `
# Small Update

{@embed:https://youtu.be/R_6jeSqG4ao}

Oh, and here's the solution for Resolve not launching correctly I mentioned about sharing in the video:

~~~sh showLineNumbers
# in your .zshrc or .bashrc
# remember, this was tested on Arch Linux, so it might not work on macos or other distros
export LD_PRELOAD=/usr/lib64/libglib-2.0.so:/usr/lib64/libgdk_pixbuf-2.0.so.0:/usr/lib64/libgio-2.0.so:/usr/lib64/libgmodule-2.0.so
~~~

then open Davinci Resolve with
~~~sh
$ /opt/resolve/bin/resolve
~~~

you can also just alias it to something that's less of a mouthful:

~~~sh
# .zshrc/.bashrc
alias resolve="/opt/resolve/bin/resolve"
~~~

there's also the two-in-one combo if you want to save lines in your file:

~~~sh
# .zshrc/.bashrc
alias resolve="LD_PRELOAD=/usr/lib64/libglib-2.0.so:/usr/lib64/libgdk_pixbuf-2.0.so.0:/usr/lib64/libgio-2.0.so:/usr/lib64/libgmodule-2.0.so /opt/resolve/bin/resolve"
~~~

# Shenanigans aside, hi!

Hey, it's been a while (practically 8 months now), and a bunch of things have changed. First things first, the site has been updated with new information, which is cool!

Second things second, I've sort of started taking coding to a more serious level, with my end goal to participate in the IOI (International Olympiad of Informatics) through either USACO (USA Computing Olympiads) or OCI (Olimpiada Chilena de Informatica).

To achieve this goal, I've decided to start utilizing the time during the coding class at my school to instead study more advanced topics. Thanks Mr. Scott for helping me achieve my dream!

My first step towards this plan is to complete the CS50x course from Harvard to fill in on any concepts that I might've overlooked when self-teaching myself coding.

So far, I've gone through Week 0 and Week 1's lectures, sections, shorts, and problem sets. Here are the scores I've gotten on my submissions!

![Scores I've gotten with check50 which make sures the code passes the tests and style50, making sure it follows style conventions](https://i.imgur.com/g6O0uU4.png)

check50 makes sure your code passes the predetermined test cases your code is designed to go through, and style50 makes sure your code follows the style conventions. So far, I've studied from Scratch, a visual programming language, to C, one of the first languages to ever language, ever.

Scratch looks nice and colorful, like this:

![Scratch code](https://i.imgur.com/xN6f4P4.png)

C looks more cryptic, yet familiar (but that's if you've read my [Coding In Arduino blog post](https://zhai-r.netlify.app/blogs/2)), like this:

~~~c showLineNumbers
#include <stdio.h>

int main(int argc, char **argv) {
    printf("hello, world!");
}
~~~

I will keep documenting my journey!
    `,
}

export { data as data_three };
