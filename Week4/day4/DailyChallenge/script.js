// Daily Challenge : Creating Objects


class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all '${this.time}' of ${this.title}`);
    }
}


const killerRabbit = new Video("killer", "kim", 15);
killerRabbit.watch();

const spongeBob = new Video("spongeBob", "ariel", 28);
spongeBob.watch();




