#include<iostream>
#include <stdio.h>
#include <stdlib.h>
using namespace std;
struct Node
{
    int val;
    struct Node *left;
    struct Node *right;
};
struct Node *findplace;
struct Node *maxleft;
struct Node *parent;

struct Node *new_node(int val)
{
    struct Node *node = (struct Node *)malloc(sizeof(struct Node));

    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return (node);
}

void insert(struct Node **tree, int key)
{

    struct Node *temp = NULL;

    if (!(*tree))
    {
        temp = (struct Node *)malloc(sizeof(struct Node));
        temp->val = key;
        temp->left = temp->right = NULL;
        *tree = temp;
        return;
    }

    if (key < (*tree)->val)
    {
        insert(&(*tree)->left, key);
    }
    else if (key > (*tree)->val)
    {
        insert(&(*tree)->right, key);
    }
}
void preorder(struct Node *temp)
{
    if (temp != NULL)
    {
        cout << temp->val << " ";
        preorder(temp->left);

        preorder(temp->right);
    }
}

void see(struct Node *temp, int wantfind) {

    if (temp != NULL)
    {

        see(temp->left, wantfind);
        if (temp->val == wantfind){

            findplace = temp;

        }

        see(temp->right, wantfind);
    }
}

void findp(struct Node *temp, struct Node *wf) {

    if (temp != NULL)
    {

        findp(temp->left, wf);
        if (temp->left == wf|| temp->right == wf) {

            parent = temp;

        }


        findp(temp->right, wf);
    }
}

struct Node* getmax(struct Node* root)
{
    struct Node* curr = root;

    while (curr && curr->right) {
        curr = curr->right;
    }

    return curr;
}

struct Node* deleteNode(struct Node* root, int key)
{
    if (root == NULL)
        return root;

    if (key < root->val)
        root->left = deleteNode(root->left, key);

    else if (key > root->val)
        root->right = deleteNode(root->right, key);
    else {
        if (root->left == NULL) {
            struct Node* temp = root->right;
            delete(root);
            return temp;
        }
        else if (root->right == NULL) {
            struct Node* temp = root->left;
            delete(root);
            return temp;
        }

        struct Node* temp = getmax(root->left);

        root->val = temp->val;
        root->left = deleteNode(root->left, temp->val);
    }
    return root;
}


int main()
{
    int in;
    int h;
    char symbol;
    scanf("%d", &in);
    struct Node *root = new_node(in);
    //struct Node *parent;



    while (cin>>in) {
        scanf("%c", &symbol);

        insert(&root, in);
        if (symbol == 10||symbol ==13) {
            //printf("break");
            break;
        }



    }
    cout << "Binary search tree (before):" << endl;
    preorder(root);
    cout << endl;


    while (cin>>in) {
        findplace = NULL;
        see(root, in);

        if (findplace == NULL){
            cout << "no " << in << endl;
            continue;
        }




       else{
        deleteNode(root,in);
       }





    }
    cout << "Binary search tree (after):" << endl;
    preorder(root);
    cout << endl;



    return 0;
}
