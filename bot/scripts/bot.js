/**
 * Using JavaScript you can manipulate and extend the conversational model as well as connect
 * to your business logic. 
 * 
 * For a complete description of the JavaScript model, see https://aka.ms/bots/cd/js
 * 
 * For information about Conversation Designer, see https://aka.ms/bots/cd
 * 
*/
/**
* @param {IConversationContext} context
* @returns boolean | Promise<boolean> true if there was a recognition. If an async operation is involved return a Promise<boolean>
*/
module.exports.Fallback_if_onRun = function (context) {
    return context.request.type === 'message';
}; 
/**
* @param {IConversationContext} context
* @returns boolean | Promise<boolean> true if there was a recognition. If an async operation is involved return a Promise<boolean>
*/
module.exports.Welcomemessage_convoUpdate_if_onRun = function (context) {
    if(context.request.membersAdded[0].name === "Bot" || context.request.membersAdded[0].name === "You") return false;
    return true;
};
