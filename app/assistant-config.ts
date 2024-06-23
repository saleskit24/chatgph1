export let assistantId = "asst_b2rmNDLm4VPaY3EJ4eDILPKj"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
