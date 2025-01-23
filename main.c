#include <stdio.h>
#include <string.h>

void vulnerableFunction(char *input) {
    char buffer[10];
    strcpy(buffer, input); // Buffer overflow vulnerability
    printf("Buffer content: %s\n", buffer);
}

int main() {
    char userInput[100];
    printf("Enter input: ");
    gets(userInput); // Unsafe function, deprecated
    vulnerableFunction(userInput);
    return 0;
}
