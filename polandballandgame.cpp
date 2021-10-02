#include <bits/stdc++.h>
 
using namespace std;
 
int main() {
    long long i, n, m;
    string s;
    set<string> c;

    cin >> n >> m;

    for (i = 0; i < n + m; i++) {
        cin >> s;
        c.insert(s);
    }

    if(n + m - c.size() > 0) {
        long long t = n + m - c.size();
        n -= t;
        m -= t;

        if(t % 2 == 1) {
            n += (t) / 2 + 1;
            m += (t) / 2;
        } else {
            n += (t) / 2;
            m += (t) / 2;
        }
    }

    if(n > m) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }
}