class Ground
{
constructor(){

    var ground_options={
    isStatic:true   
    }

    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.body=Bodies.rectangle(x, y, w, h, ground_options);
}
display(){
    var groundPos=this.body.position;
    push ();
    translate(groundPos.x, groundPos.y);
    rect(0, 0, this.w, this.h);
    pop ();
}
}




