module SequenceRecognizer_Moore(
  input wire clk,
  input wire reset,
  input wire in,
  output wire out
);

  reg [2:0] state;
  reg out_reg;

  always @(posedge clk or posedge reset) begin
    if (reset)
      state <= 3'b000;
    else begin
      case(state)
        3'b000: if (in) state <= 3'b001; else state <= 3'b000;
        3'b001: if (in) state <= 3'b010; else state <= 3'b000;
        3'b010: if (in) state <= 3'b011; else state <= 3'b000;
        3'b011: if (in) state <= 3'b011; else state <= 3'b100;
        3'b100: if (in) state <= 3'b101; else state <= 3'b000;
        3'b101: if (in) state <= 3'b101; else state <= 3'b110;
        3'b110: if (in) state <= 3'b101; else state <= 3'b000;
      endcase
    end
  end

  always @(state) begin
    case(state)
      3'b011: out_reg = 1'b1;
      default: out_reg = 1'b0;
    endcase
  end

  assign out = out_reg;

endmodule
#include <cstdio>  
#include <cstring>  
#include <iostream>  
#include <string>  
#include <algorithm>  
#include <vector>  
#include <set>  
  
using namespace std;  
  
const int MAX_N = 301;  
int t, sum, n, m;  
vector<int> f[MAX_N];  
int c[MAX_N], d[MAX_N];  
  
bool check(int x)  
{  
    for (int i = 0; i < f[x].size(); i++)  
        if (c[f[x][i]] == c[x])  
            return false;  
    return true;  
}  
  
void work(int x, int tot)  
{  
    if (x > n)  
    {  
        if (sum < tot)  
        {  
            sum = tot;  
            tot = 0;  
            for (int i = 1; i <= n; i++)  
                if (c[i] > 0)  
                    d[tot++] = i;  
        }  
        return;  
    };  
    if (tot + n - x + 1 < sum)  
        return;  
    c[x] = 1;  
    if (check(x))  
        work(x + 1, tot + 1);  
    c[x] = -1;  
    work(x + 1, tot);  
}  
  
int main()  
{  
    ios_base::sync_with_stdio(false);  
    cin.tie(NULL);  
  
    cin >> t;  
    while (t--)  
    {  
        cin >> n >> m;  
        for (int i = 1; i <= n; i++)  
            f[i].clear();  
        memset(c, 0, sizeof(c));  
        for (int i = 0; i < m; i++)  
        {  
            int a, b;  
            cin >> a >> b;  
            f[a].push_back(b);  
            f[b].push_back(a);  
        }  
        sum = 0;  
        work(1, 0);  
        cout << sum << endl;  
        sort(d, d + sum);  
        for (int i = 0; i < sum - 1; i++)  
            cout << d[i] << " ";  
        if (sum > 0)  
            cout << d[sum - 1];  
        cout << endl;  
    }  
    return 0;  
}  