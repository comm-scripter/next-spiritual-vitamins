import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-rows-100 items-center justify-items-center min-h-screen h-full p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-200 to-emerald-100">
      <p className="font-bold text-3xl">HOW THE SPIRITUAL VITAMINS DEVELOPED</p>
      <p>
        While reading my Devotions one morning about 2 years ago I heard a voice
        (yes, it was audible for me) say, &ldquo;Get my Word out!&rdquo; I
        understood it to be God speaking to me. It was not a dream as I was wide
        awake. I answered and said, &ldquo;Lord, I am a nobody. I am not a
        preacher nor do I teach women or children in church. How can I get Your
        Word out?&rdquo;
      </p>
      <p>
        Looking back on the event that was a pretty stupid thing to say. Did I
        think God didn&apos;t know who He was talking to? He repeated,
        &ldquo;Get my Word out&rdquo;. Later I told my husband about the
        encounter and we discussed possibilities. After prayer we decided to
        produce a form of what we call &ldquo;Spiritual Vitamins&rdquo;.
      </p>

      <div className="relative">
        <div>
          <Image
            width={200}
            height={100}
            src="/ark.jpg"
            alt="get the Word out logo"
            className="float-left mr-5 rounded-full"
          ></Image>
        </div>
        <p className="text-justify">
          <strong className="text-2xl">The original vitamins</strong> were made
          of construction paper shaped like a capsule. They contained a Title,
          Date and Scripture verse, all hand lettered, and colored. I mailed 20
          copies to my family members and it took me 30 days to create 20
          vitamins. They were not fancy at all.
        </p>
      </div>

      <p>
        Months later my husband offered the idea that he could print the
        vitamins on cardstock on the computer, in color and even find computer
        art work for the front. I added an additional Quote on the back side.
        This continued until recently when our son designed a web page to
        include all past, present and future vitamins.
      </p>
      <p>
        As any labor of love, our family has put our whole heart into sharing
        Biblical truths in a way that can get the Word out to everyone who is
        interested. We hope that the Spiritual Vitamin Site is a blessing to
        you, your family, and friends.
      </p>
      <div className="flex justify-between items-center hover:scale-110 transition-all">
        <div className="hover:scale-110 transition-all relative w-20 h-15 rounded p-1 mr-1">
          <Link className="flex items-center justify-center" href="/">
            <Image
              src="/logo.png"
              alt="get the Word out logo"
              className="!relative"
              fill
            ></Image>
          </Link>
        </div>
        <h2>&ldquo;Get the Word out!&rdquo;</h2>
      </div>
    </div>
  );
}
