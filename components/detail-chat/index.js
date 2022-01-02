Component({
    properties: {
        userInfo: Object,
    },
    data: {},
    methods: {
        handleToChat() {
            const targetUserId = this.data.userInfo.id
            this.triggerEvent('chat', { targetUserId })
        }
    }
});
