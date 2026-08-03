# Kablam!
In-browser fireworks show creation and display

[Open here](https://infinitelyrepeating.github.io/kablammo)

Kablam is inspired by The Complete Computer Fireworks Celebration Kit (1985), a neat toy game for the Commodore 64 (published by Activision). It was created 100% through Claude by Antropic. 

# Casual Instructions

The much of the display is self-explanatory, and if you don't understand what something does, play with it until you do! Still, here are some helpful tips.

* You have both shells and ground effects. Shells can be launched by clicking in the air. Ground effects can be activated by clicking below the ground line in the scene.
* The radius/trails/persistence (RTP) sliders affect shells and ground effects differently. In particular, most ground effects will ignore the trails slider, and the radius slider will determine the size of the effect.
* The hammer icon refers to the "Shell Builder." The Shell Builder lets you subdivide a particular shell pattern up to two times, color each section of shells differently, deform the distribution of fragments, and set a unique RTP value for that shell (which gets combined with the global RTP sliders). You can also combine up to two shell types. Shell builder only applies to aerial shells.
* The LED sign shows at ground level, and scrolls for lengthy messages
* You can load mp3, m4a and MIDI music. Doing so will automatically add the music to the timeline (see below), but you can also just play it and launch fireworks in real time. The page also ships with a selection of public domain/freely licensed music that's popular for fireworks shows.
* The "rapid" button will launch a series of random shells that follow your cursor. The red "finale" button will launch a random blast of shells and ground effects.

# The Timeline (designing shows)

The timeline lets you record and play back shows, especially with musical accompaniment. Loaded music will automatically appear at the top of the timeline, shaded by the amount of energy in the song.

The red play head can be positioned by clicking on the ruler. Using the mouse wheel (or pinching) on the ruler will zoom in/out. Pressing play will usually play the show from the play head position, though there is a rewind button, and it will automatically rewind if the play head is more than 2.5 seconds past the last event in the timeline.

A recorded show consists of a series of events. Events can represent a launched shell, a ground effect, or an LED message. Events are shown as rectangles on the timeline. Events can be added by clicking on the timeline with the mouse, or (on mobile) by positioning the red play head and tapping the "+ Event" button. Events will automatically snap to the nearest quarter second, unless snap-to is turned off.

Existing events can be modified or removed by clicking on them, though the type of event (music, led, ground effect, etc) can't be changed. You can also drag the left and right sides of an event's rectangle to adjust start/stop/duration.

A couple of notes about different kinds of events

1. Lengthy LED messages will scroll at least once, so the length of its rectangle will determine scroll speed.
2. If the event is a shell, the right side of the rectangle marks the shell's detonation. A shell's launch velocity is calculated so that it detonates at the right altitude and time.
3. Aerial shell (and ground effects) have a position attribute to show where on the screen the shell (or effect) appears. The attribute is rescaled to the current resolution, so a show made on a mobile device will look different on a desktop.

While events CAN be manually added one at a time, it's recommended that you use the record button to outline a show. While recording, any loaded music will play, and manually triggered shells and effects will be saved on the timeline as events. Any existing events will play normally, allowing you to add on to existing shows.

You can use the record button to "outline" a show, and then manually revise the events for timing and variety.

Recorded shows with musical accompaniment are given a "Sync Score" to rate how well the show goes with the music. Shows are graded on beat matching, energy matching, dynamics matching (eg. ebb and flow of music), variety of effects/positions/rtp values, and the climax of the song. Clicking the "sync" button will bring up your score, along with tips for improving it. Note that for shells, the sync score likes it when shells detonate on beat, but will award partial credit for launching on beat.

Shows can be saved/loaded as JSON.





