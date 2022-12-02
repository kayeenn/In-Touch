import "./dialog.css";

export default function Dialog() {
  return (
    <div className="DialogWin">
      <div className="Main_part_top">
        <img src="Pictures\24.webp" />
        <p>Michael (Rich Mikki)</p>
      </div>

      <hr className="hr_dialog" />

      <div className="Main_part">
        <div className="another">
          <div className="size_1">
            <p>How do you like sneakers? don't they squeeze?</p>
          </div>
        </div>

        <div className="you">
          <div className="size_2">
            <p>Nah Mikey, You know your business</p>
          </div>
        </div>

        <div className="another">
          <div className="size_3">
            <p>I appreciate it man</p>
          </div>
        </div>

        <div className="yesterday">
          <p>Yesterday</p>
        </div>

        <div className="you">
          <div className="size_4">
            <p>Hey Mike</p>
          </div>
        </div>

        <div className="you">
          <div className="size_5">
            <p>Mikey</p>
          </div>
        </div>

        <div className="you">
          <div className="size_6">
            <p>Michael?</p>
          </div>
        </div>

        <div className="another">
          <div className="size_7">
            <p>What, Shaq you know Im busy, what happend?</p>
          </div>
        </div>

        <div className="you">
          <div className="size_8">
            <p>
              Can't spare time for an old friend? in short, I need a pair of
              sneakers for my friend, his son's birthday, you know, you need
              something exclusive.
            </p>
          </div>
        </div>

        <div className="another">
          <div className="size_9">
            <p>
              Okay, come to me tomorrow and we'll see what we can do. And Shaq ,
              this time let's not have Nike in my store, okay?
            </p>
          </div>
        </div>

        <div className="you">
          <div className="size_10">
            <p>
              Thank you, brother. About the last time, you know that I flew from
              Brazil, there were no Jordans there.
            </p>
          </div>
        </div>

        <div className="another">
          <div className="size_11">
            <p>Whatever man, you heard me</p>
          </div>
        </div>
      </div>

      <div className="your_message">
        <img className="mes_smile" src="Pictures\happiness 1.png" alt="" />
        <img className="mes_paper" src="Pictures\paper-clip 1.png" alt="" />

        <input className="type_in" placeholder="Type your message" />

        <img className="mes_mic" src="Pictures\microphone 1.png" alt="" />
      </div>
    </div>
  );
}
