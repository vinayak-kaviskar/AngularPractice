export class Task {

    private _id: number;
    private _userId: number;
    private _taskName: string;
   
    private _reminderTime: Date;
    private _isCompleted:  boolean;
    private _isNotified: number;

    constructor(){}

/* constructor( userId :number, taskName:string, reminderTime:Date, isCompleted:boolean,isNotified :number,id ?:number){

    this._id = id;
    this._userId = userId;
    this._reminderTime = reminderTime;
    this._isCompleted = isCompleted;
    this._isNotified = isNotified;
    this._taskName = taskName;
} */

public get taskName(): string {
    return this._taskName;
}
public set taskName(value: string) {
    this._taskName = value;
}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    
    public get reminderTime(): Date {
        return this._reminderTime;
    }
    public set reminderTime(value: Date) {
        this._reminderTime = value;
    }

    public get isCompleted(): boolean {
        return this._isCompleted;
    }
    public set isCompleted(value: boolean) {
        this._isCompleted = value;
    }
    
    public get isNotified(): number {
        return this._isNotified;
    }
    public set isNotified(value: number) {
        this._isNotified = value;
    }

    
}
