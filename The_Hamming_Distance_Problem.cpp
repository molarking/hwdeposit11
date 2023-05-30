#include <iostream>  
#include <vector>  
using namespace std;  
  
void generateBitStrings(int N, int H, string current, int ones, int index) {  
    if (index == N) {  
        if (ones == H) {  
            cout << current << endl;  
        }  
        return;  
    }  
  
    // Set the current bit to 0 and recurse  
    generateBitStrings(N, H, current + "0", ones, index + 1);  
  
    // Set the current bit to 1 and recurse  
    if (ones < H) {  
        generateBitStrings(N, H, current + "1", ones + 1, index + 1);  
    }  
}  
  
int main() {  
    int T;  
    cin >> T;  
  
    for (int t = 0; t < T; t++) {  
        int N, H;  
        cin >> N >> H;  
  
        generateBitStrings(N, H, "", 0, 0);  
  
        if (t < T - 1) {  
            cout << endl; // Print a blank line between datasets  
        }  
    }  
  
    return 0;  
}  