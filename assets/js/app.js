isAuthenticated = false;
commands = ["login", "about"]
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
$(function(){
    $("body").terminal(function(command){
        command = command.toLowerCase()
        if(command == "login"){
            if(isAuthenticated){
                this.echo("すでにログインされています。");
            }else{
                this.echo("資格情報を入力してください。");
                this.echo("Username:colkirov");
                this.read("Password: ", str =>{
                    this.echo("ログインに成功しました。現在のログインユーザー：キーロフ大佐。");
                    isAuthenticated = true;
                });
            }
        }else if(command == "about"){
            if(!isAuthenticated){
                this.echo("アクセス権限がありません。");
                this.echo("ログインするには、loginコマンドを実行してください。")
            }else{
                this.echo("表示可能な文書：");
                this.echo("[a] シャーレ戦略軍について");
                this.echo("[b] 海軍戦力について");
                this.echo("[c] キーロフ大佐について");
                this.echo("文書を選択せよ");
                this.read("doc> ", async str => {
                    if (str == "a") {
                        await typer("シャーレ戦略軍司令部について", 100, this);
                        await typer("エデン条約以降の流れで結成された準軍事組織である。", 100, this);
                        await typer("陸海空軍の連携した作戦実行が基本となる。",100 ,this);
                        await typer("第二次トリニティ＝ゲヘナ戦争では、回避にも関わっているが、これは万が一戦争となれば艦隊が動けなくなることを懸念した評議会の判断によるものであり、決して善意によるものではなかった。", 100,  this);

                        await _sleep(2000);
                        this.echo("=======================警告=======================")
                        this.echo("記録保管・情報管理委員会からの通知");
                        this.echo("次以降のバイトで重大な時空間変動が検知されました。これ以降のデータは分岐世界の記録を含む可能性があります。");
                        this.echo("続行しますか？（続行するにはyesと入力、キャンセルするにはそれ以外を入力）");
                        this.read("Prompt > ", async str => {
                            str = str.toLowerCase()
                            if (str == "yes") {
                                this.echo("ファイルを表示します。読み込み中…操作をしないでください。")
                                await _sleep(2000);
                                await redTyper("シャーレはゲヘナ＝トリニティ戦争の回避に失敗した。今やトリニティはゲヘナの領土の78%を掌握した。", 100, this);
                                await redTyper("数週間後、ゲヘナは降伏した。現在パテル派によるゲヘナ生徒への迫害が行われている。", 100, this);
                                await redTyper("ミレニアムはこの状況に強い懸念を示しているが、ゲヘナの兵器を鹵獲したトリニティの前でどれほど戦えるのかは不明である。", 100, this);

                            }
                        });
                    } else {
                        this.echo("エラー：ファイルが見つかりません。");
                    }
                });
            }
        }else{
            this.echo(command + "は利用可能なコマンドではありません。");
            this.echo("利用可能なコマンド：");
            for (let i = 0; i < commands.length; i++) {
                this.echo(commands[i]);
            }
        }
    }, {
        greetings: "Schale Strategic Forces(SSF) Terminal Node Корд-102 (Kord-102) v1.21.1 \n ヘルプを表示するには、helpを入力してください。 まず、ログインしてください。",
        prompt: "Kord-102@SSF:~$ ",
    });
});

async function typer(text, interval, objref){
    // let displayText = Array.from(text);
    // for (const character of displayText) {
    //     objref.echo(character, {newline: false});
    //     await _sleep(interval)
    // }
    // objref.echo("\n", {newline: false})
    objref.echo(text)
    await _sleep(interval)
}

async function redTyper(text, interval, objref){
    // let displayText = Array.from(text);
    // for (const character of displayText) {
    //     objref.echo(character, {newline: false});
    //     await _sleep(interval)
    // }
    // objref.echo("\n", {newline: false})
    objref.error(text)
    await _sleep(interval)
}