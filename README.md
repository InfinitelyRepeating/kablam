# Kablam!
In-browser fireworks show creation and display

[Open here](https://all-no-facts.github.io/kablam)

Kablam! is inspired by The Complete Computer Fireworks Celebration Kit (1985), a neat toy game for the Commodore 64 (published by Activision). It was created 100% through Claude by Anthropic. 

# Casual Instructions

Much of the display is self-explanatory, and if you don't understand what something does, play with it until you do! Still, here are some helpful tips.

* You have both shells and ground effects. Shells can be launched by clicking in the air. Ground effects can be activated by clicking below the ground line in the scene.
* The radius/trails/persistence (RTP) sliders affect shells and ground effects differently. In particular, most ground effects will ignore the trails slider, and the radius slider will determine the size of the effect.
* The hammer icon refers to the "Shell Builder." The Shell Builder lets you subdivide a particular shell pattern up to two times, color each section of shells differently, deform the distribution of fragments, and set a unique RTP value for that shell (which gets combined with the global RTP sliders). You can also combine up to two shell types. Shell builder only applies to aerial shells.
* The LED sign shows at ground level, and scrolls for lengthy messages
* You can load mp3 and m4a music. Doing so will automatically add the music to the timeline (see below), but you can also just play it and launch fireworks in real time. The page also ships with a selection of public domain/freely licensed music that's popular for fireworks shows.
* The "rapid" button will launch a series of random shells that follow your cursor. The red "finale" button will launch a random blast of shells and ground effects.

# The Timeline (designing shows)

The timeline lets you record and play back shows, especially with musical accompaniment. Loaded music appears at the top of the timeline as a colored bar — brighter and warmer where the song is louder — with two extra rows of marks to help you place things. Below the bar, tick marks show the music's actual beats: bright, taller ticks are the ones that matter most for your score, aim your shells there; shorter, dimmer ticks are just part of the surrounding rhythm. Above the bar, small triangles show where the music's energy is genuinely swelling or fading — the wider the triangle, the longer that swell takes, and the taller it is, the bigger the change.

The red play head can be positioned by clicking on the ruler. Using the mouse wheel (or pinching) on the ruler will zoom in/out. Pressing play resumes the show from wherever the play head currently sits; there's also a rewind button, and playback will automatically rewind if the play head is more than 2.5 seconds past the last event in the timeline.

A recorded show consists of a series of events. Events can represent a launched shell, a ground effect, or an LED message. Events are shown as rectangles on the timeline. Events can be added with the "+ Event" button (every platform), or by right-clicking on the timeline (desktop). Dragging on the timeline itself pans the view rather than creating anything. Events will automatically snap to the nearest quarter second, unless snap-to is turned off.

A single click or tap on an existing event selects it; click or tap that same event again to open its editor, where it can be modified or removed. (The type of event — shell, ground effect, LED, etc — can't be changed after creation.) You can also drag the left and right sides of an event's rectangle to adjust start/stop/duration, or drag its body to move it in time.

A couple of notes about different kinds of events

1. Lengthy LED messages will scroll at least once, so the length of its rectangle will determine scroll speed.
2. If the event is a shell, the right side of the rectangle marks the shell's detonation. A shell's launch velocity is calculated so that it detonates at the right altitude and time.
3. Aerial shell (and ground effects) have a position attribute to show where on the screen the shell (or effect) appears. The attribute is rescaled to the current resolution, so a show made on a mobile device will look different on a desktop.

While events CAN be manually added one at a time, it's recommended that you use the record button to outline a show. While recording, any loaded music will play, and manually triggered shells and effects will be saved on the timeline as events. Any existing events will play normally, allowing you to add on to existing shows. Once the basic timing of a show is recorded, it's easier to go back and edit events for precise timing and variety.

## Sync Score

Recorded shows with musical accompaniment get a "Sync Score" — click the "sync" button to see it, along with specific tips for improving it. It's graded on five things:

* **Accent sync** — do your shells burst *right when the music hits*? The app listens to the actual track and finds these moments on its own, marking the more important accents below the track on the timeline (the brighter/taller the mark, the more important). You don't need to be absolutely perfect (close counts, but does taper off). You can also get partial credit for launching on beat, even if the detonation is off beat. Don't worry about matching every single beat. The app focuses on the more important ones, even on a high bpm song. Go beyond that specifically during the song's big moment (its climax) and you'll earn a bit of extra credit for the extra effort.
* **Energy tracking** — does the *amount* of stuff happening track how loud/busy the music is? Thin things out during a quiet verse; get denser during a big loud section. This is about overall density following the music's shape, not each individual beat. Use the color of the song bar as a guide.
* **Dynamics** — does *your show itself* have real quiet stretches and real loud stretches, matching how much the music swings between the two? This is different from energy tracking: a show that's medium-busy all the way through, even if that density loosely follows the music's ups and downs, can still fall short here. Don't be afraid to have parts of your show with little happening, and other parts packed. The long triangles above the song bar are a direct guide for this: a tall one marks a moment the music is genuinely swelling or dropping, so match it with a build-up or pull-back of your own there; a flat stretch with no triangle means the music's holding steady, regardless of how loud it happens to be.
* **Climax** — does your show's own busiest moment land around the same time as the music's actual peak (often near the end, but not always)? It doesn't need to be exact, just in the right neighborhood.
* **Variety** — are you actually using the app's palette (shell shapes, colors, radius/trails/persistence, and where things appear on screen), or repeating the same handful of choices over and over? Also covers keeping shells in a sensible on-screen area. Bunching everything at the very edges or down at ground level costs credit rather than earning it.

You don't need all five to be perfect — the app looks at the best-scoring *combination* of these and grades you on that, so a show that's weak in one area but strong in the others can still land well. The scoring gets more demanding as you climb: a few minutes of casual effort is usually enough for a score in the 50s or 60s; the 90s take real, deliberate work — nudging burst times precisely, actually varying your settings on purpose, and paying attention to the music's own shape rather than firing at will.

Shows can be saved/loaded as JSON.

# Music Credits

* **[Stars and Stripes Forever](https://commons.wikimedia.org/wiki/File:Sousa's_%22The_Stars_and_Stripes_Forever%22_-_United_States_Marine_Band_(2017).ogg)** — U.S. Marine Band (2017), via Wikimedia Commons
* **[1812 Overture](https://archive.org/details/1812Overture)** (Finale excerpted from original) — U.S. Army Band (2005), via archive.org
* **[The Blue Danube](https://www.classicals.de/strauss-2-blue-danube)** (Waltz/Finale excerpted from original) — Orchestra Tsumugi, via classicals.de
* **[Ride of the Valkyries](https://www.classicals.de/wagner-valkyrie)** — cond. Philip Milman, via classicals.de
* **[William Tell Overture](https://commons.wikimedia.org/wiki/File:Gioachino_Rossini,_William_Tell_Overture_(military_band_version,_2000).ogg)** (Finale excerpted from original) — U.S. Marine Band (2000), via Wikimedia Commons
