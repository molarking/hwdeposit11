#include <iostream>  
#include <vector>  
#include <algorithm>  
using namespace std;  
  
struct Item {  
    int index;  
    int weight;  
    int value;  
    double valuePerWeight;  
};  
  
bool compareByValuePerWeight(const Item& a, const Item& b) {  
    return a.valuePerWeight > b.valuePerWeight;  
}  
  
int knapSack(int capacity, const vector<Item>& items, vector<int>& selectedItems) {  
    int n = items.size();  
    vector<vector<int>> dp(n + 1, vector<int>(capacity + 1, 0));  
  
    for (int i = 1; i <= n; i++) {  
        for (int j = 1; j <= capacity; j++) {  
            if (items[i - 1].weight <= j) {  
                dp[i][j] = max(items[i - 1].value + dp[i - 1][j - items[i - 1].weight], dp[i - 1][j]);  
            } else {  
                dp[i][j] = dp[i - 1][j];  
            }  
        }  
    }  
  
    int i = n, j = capacity;  
    while (i > 0 && j > 0) {  
        if (dp[i][j] != dp[i - 1][j]) {  
            selectedItems.push_back(items[i - 1].index);  
            j -= items[i - 1].weight;  
        }  
        i--;  
    }  
  
    reverse(selectedItems.begin(), selectedItems.end());  
  
    return dp[n][capacity];  
}  
  
int main() {  
    int capacity;  
    cin >> capacity;  
  
    vector<Item> items;  
    int index, weight, value;  
    int cnt = 0;  
    cin >> index >> weight >> value;  
  
    while (index != -1 && weight != -1 && value != -1) {  
        Item item;  
        item.index = index;  
        item.weight = weight;  
        item.value = value;  
        item.valuePerWeight = static_cast<double>(value) / weight;  
        items.push_back(item);  
        cnt++;  
        cin >> index >> weight >> value;  
    }  
  
    sort(items.begin(), items.end(), compareByValuePerWeight);  
  
    int n = cnt;  
    int* weightArray = new int[n];  
    int* valueArray = new int[n];  
  
    for (int i = 0; i < n; i++) {  
        weightArray[i] = items[i].weight;  
        valueArray[i] = items[i].value;  
    }  
  
    vector<int> selectedItems;  
    int totalValue = knapSack(capacity, items, selectedItems);  
  
    delete[] weightArray;  
    delete[] valueArray;  
  
    if (selectedItems.empty()) {  
        cout << "No items selected." << endl;  
    } else {  
        //cout << "Selected items: ";  
        for (int i = 0; i < selectedItems.size(); i++) {  
            cout << selectedItems[i] << " ";  
        }  
        cout << endl;  
    }  
  
    cout << totalValue << endl;  
  
    return 0;  
}  