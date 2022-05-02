

export interface Lesson {
    // The id number of the lesson
    id: number;
    // The description of the lesson
    description: string;
    // The length of the lesson
    duration: string;
    // The order or sequence of the lesson
    seqNo: number;
    // The id of the course to which the lesson belongs
    courseId: number;
    // A lengthy description of the lesson's contents
    longDescription:string;
}
