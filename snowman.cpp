#include <iostream>    
#include <vector>    
    
using namespace std;    
  long long sum;  
vector<int> findMeltingDays(int n, const vector<long long>& sizes, const vector<long long>& temperatures) {    
    vector<int> meltingDays(n, -1);    
    
    for (int i = 0; i < n; i++) {    
        long long size = sizes[i];    
        int day = i + 1;    
        int cnt = 0;    
        if(i!=0){  
        sum-=temperatures[i-1];  
        }  
        if(size>sum){  
                  
                continue;  
            }  
        while (day <= n) {    
            size -= temperatures[i + cnt];    
    
            if (size <= 0) {    
                meltingDays[i] = day;    
                break;    
            }    
    
            day++;    
            cnt++;    
        }    
    }    
    
    return meltingDays;    
}    
    
int main() {    
    ios_base::sync_with_stdio(false);    
    cin.tie(NULL);    
    int n;    
    cin >> n;    
  sum  = 0;  
    vector<long long> sizes(n);    
    vector<long long> temperatures(n);    
    
    for (int i = 0; i < n; i++) {    
        cin >> sizes[i];    
    }    
    
    for (int i = 0; i < n; i++) {    
        cin >> temperatures[i];    
        sum+=temperatures[i];  
    }    
    
    vector<int> meltingDays = findMeltingDays(n, sizes, temperatures);    
    
    for (int i = 0; i < n; i++) {    
        cout << meltingDays[i];    
    
            
            cout << " ";    
            
    }    
    
    cout << endl;    
    
    return 0;    
}  