/** The string literal type allows you to specify a set of possible string values for a variable, 
 * only those string values can be assigned to a variable. */

let userName : "Rishikesh" | "Raj" | "Raju";

// userName = "Pal" // Will not work
userName = "Rishikesh" // Will work
userName = "Raj" // Will work
userName = "Raju" // Will work