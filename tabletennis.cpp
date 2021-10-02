#include <bits/stdc++.h>
 
using namespace std;
 
int main() {
    int n, t;
    int a[600];
    long long k;

    cin >> n >> k;

    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    int retorno = a[0];
    t = 0;

    for (int i = 1; i < n; i++) {
        if(t >= k) {
            cout << retorno << endl;
            return 0;
        }

        if(retorno > a[i]) {
            t++;
        } else {
            t = 1;
            retorno = a[i];
        }
    }
    
    cout << retorno << endl;
    return 0;
}