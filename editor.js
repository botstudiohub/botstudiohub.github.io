        //template
        function template() {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", `module.exports = {
                // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
                // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
                name: "if arguments are none",
            
                // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
                author: ["YOURTAG#1010"],
            
                // Place the version of the mod here.
                version: "1.0.0",
            
                // Whenever you make a change, please place the changelog here with your name. Created Send Message ~ Great Plains Modding\n
                changelog: "nothing",
            
                // Set this to true if this will be an event.
                isEvent: false,
                
                isResponse: true,
            
                // Set this to true if this will be a response mod.
                isMod: true,
            
                // If you want to modify a core feature, set this to true.
                isAddon: false,
            
                // Here you can define where you want your mod to show up inside of Discord Bot Studio
                section: "Message",
            
                // Place your html to show inside of Discord Bot Studio when they select your mod.
                html: function(data) {
                    return '';
                },
            
                // When the bot is first started, this code will be ran.
                init: function() {
                    console.log("Loaded MOD NAME");
                },
            
                // Place your mod here.
                mod: function(DBS, message, action, args, command, index) {
                        DBS.callNextAction(command, message, args, index + 1);
                   
                }
            };`);
          }
          //
//FIELD
        function field() {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", `            <div class="form-group">
              <label>Delay between nodes (In Seconds) * </label>
              <textarea class="form-control field" name="timedelay" rows="1" ></textarea>
          </div>`);
          }
          //
                  //NEEDED FIELD
        function neededfield() {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", `            <div class="form-group">
              <label>Delay between nodes (In Seconds) * </label>
              <textarea class="form-control needed-field" name="timedelay" rows="1" ></textarea>
          </div>`);
          }
          //
                            //DROPDOWN
        function dropdown() {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", `        <div class="form-group">
            <label>Dropdown *</label>
            <select class="form-control" name="dropdown">
                <option value="O1" selected>Option 1</option>
                <option value="O2">Option 2</option>
            </select>
        </div>`);
          }
          //
                                      //BREAKS
        function breaks() {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", `        switch (action.pinmode) {
                case "Fixed":
                    message.pin([]);
                    break;
                case "Custom":
                    message.channel.send(action.messagetext).then((message) => message.pin());
                    break;
            }`);
          }
          //
                                                //MESSAGE
        function message() {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", `message.channel.send("YOUR MESSAGE");`);
          }
          //
