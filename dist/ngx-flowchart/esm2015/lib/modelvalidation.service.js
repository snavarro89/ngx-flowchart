import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { fcTopSort, ModelvalidationError } from './ngx-flowchart.models';
let FcModelValidationService = class FcModelValidationService {
    constructor() { }
    validateModel(model) {
        this.validateNodes(model.nodes);
        this._validateEdges(model.edges, model.nodes);
        return model;
    }
    validateNodes(nodes) {
        const ids = [];
        nodes.forEach((node) => {
            this.validateNode(node);
            if (ids.indexOf(node.id) !== -1) {
                throw new ModelvalidationError('Id not unique.');
            }
            ids.push(node.id);
        });
        const connectorIds = [];
        nodes.forEach((node) => {
            node.connectors.forEach((connector) => {
                if (connectorIds.indexOf(connector.id) !== -1) {
                    throw new ModelvalidationError('Id not unique.');
                }
                connectorIds.push(connector.id);
            });
        });
        return nodes;
    }
    validateNode(node) {
        if (node.id === undefined) {
            throw new ModelvalidationError('Id not valid.');
        }
        if (typeof node.name !== 'string') {
            throw new ModelvalidationError('Name not valid.');
        }
        if (typeof node.x !== 'number' || node.x < 0 || Math.round(node.x) !== node.x) {
            throw new ModelvalidationError('Coordinates not valid.');
        }
        if (typeof node.y !== 'number' || node.y < 0 || Math.round(node.y) !== node.y) {
            throw new ModelvalidationError('Coordinates not valid.');
        }
        if (!Array.isArray(node.connectors)) {
            throw new ModelvalidationError('Connectors not valid.');
        }
        node.connectors.forEach((connector) => {
            this.validateConnector(connector);
        });
        return node;
    }
    _validateEdges(edges, nodes) {
        edges.forEach((edge) => {
            this._validateEdge(edge, nodes);
        });
        edges.forEach((edge1, index1) => {
            edges.forEach((edge2, index2) => {
                if (index1 !== index2) {
                    if ((edge1.source === edge2.source && edge1.destination === edge2.destination) ||
                        (edge1.source === edge2.destination && edge1.destination === edge2.source)) {
                        throw new ModelvalidationError('Duplicated edge.');
                    }
                }
            });
        });
        if (fcTopSort({ nodes, edges }) === null) {
            throw new ModelvalidationError('Graph has a circle.');
        }
        return edges;
    }
    validateEdges(edges, nodes) {
        this.validateNodes(nodes);
        return this._validateEdges(edges, nodes);
    }
    _validateEdge(edge, nodes) {
        if (edge.source === undefined) {
            throw new ModelvalidationError('Source not valid.');
        }
        if (edge.destination === undefined) {
            throw new ModelvalidationError('Destination not valid.');
        }
        if (edge.source === edge.destination) {
            throw new ModelvalidationError('Edge with same source and destination connectors.');
        }
        const sourceNode = nodes.filter((node) => node.connectors.some((connector) => connector.id === edge.source))[0];
        if (sourceNode === undefined) {
            throw new ModelvalidationError('Source not valid.');
        }
        const destinationNode = nodes.filter((node) => node.connectors.some((connector) => connector.id === edge.destination))[0];
        if (destinationNode === undefined) {
            throw new ModelvalidationError('Destination not valid.');
        }
        if (sourceNode === destinationNode) {
            throw new ModelvalidationError('Edge with same source and destination nodes.');
        }
        return edge;
    }
    validateEdge(edge, nodes) {
        this.validateNodes(nodes);
        return this._validateEdge(edge, nodes);
    }
    validateConnector(connector) {
        if (connector.id === undefined) {
            throw new ModelvalidationError('Id not valid.');
        }
        if (connector.type === undefined || connector.type === null || typeof connector.type !== 'string') {
            throw new ModelvalidationError('Type not valid.');
        }
        return connector;
    }
};
FcModelValidationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], FcModelValidationService);
export { FcModelValidationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWx2YWxpZGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmxvd2NoYXJ0LyIsInNvdXJjZXMiOlsibGliL21vZGVsdmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBd0MsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHL0csSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFFbkMsZ0JBQWdCLENBQUM7SUFFVixhQUFhLENBQUMsS0FBYztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFvQjtRQUN2QyxNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDbEQ7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sWUFBWSxHQUFhLEVBQUUsQ0FBQztRQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFD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RUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUgsSUFBSSxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxVQUFVLEtBQUssZUFBZSxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sWUFBWSxDQUFDLElBQVksRUFBRSxLQUFvQjtRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFNBQXNCO1FBQzdDLElBQUksU0FBUyxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDOUIsTUFBTSxJQUFJLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pHLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUVGLENBQUE7QUFySFksd0JBQXdCO0lBRHBDLFVBQVUsRUFBRTs7R0FDQSx3QkFBd0IsQ0FxSHBDO1NBckhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZjQ29ubmVjdG9yLCBGY0VkZ2UsIEZjTW9kZWwsIEZjTm9kZSwgZmNUb3BTb3J0LCBNb2RlbHZhbGlkYXRpb25FcnJvciB9IGZyb20gJy4vbmd4LWZsb3djaGFydC5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmNNb2RlbFZhbGlkYXRpb25TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZU1vZGVsKG1vZGVsOiBGY01vZGVsKTogRmNNb2RlbCB7XG4gICAgdGhpcy52YWxpZGF0ZU5vZGVzKG1vZGVsLm5vZGVzKTtcbiAgICB0aGlzLl92YWxpZGF0ZUVkZ2VzKG1vZGVsLmVkZ2VzLCBtb2RlbC5ub2Rlcyk7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlTm9kZXMobm9kZXM6IEFycmF5PEZjTm9kZT4pOiBBcnJheTxGY05vZGU+IHtcbiAgICBjb25zdCBpZHM6IHN0cmluZ1tdID0gW107XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZU5vZGUobm9kZSk7XG4gICAgICBpZiAoaWRzLmluZGV4T2Yobm9kZS5pZCkgIT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBNb2RlbHZhbGlkYXRpb25FcnJvcignSWQgbm90IHVuaXF1ZS4nKTtcbiAgICAgIH1cbiAgICAgIGlkcy5wdXNoKG5vZGUuaWQpO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvbm5lY3Rvcklkczogc3RyaW5nW10gPSBbXTtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmNvbm5lY3RvcnMuZm9yRWFjaCgoY29ubmVjdG9yKSA9PiB7XG4gICAgICAgIGlmIChjb25uZWN0b3JJZHMuaW5kZXhPZihjb25uZWN0b3IuaWQpICE9PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBNb2RlbHZhbGlkYXRpb25FcnJvcignSWQgbm90IHVuaXF1ZS4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0b3JJZHMucHVzaChjb25uZWN0b3IuaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlTm9kZShub2RlOiBGY05vZGUpOiBGY05vZGUge1xuICAgIGlmIChub2RlLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBNb2RlbHZhbGlkYXRpb25FcnJvcignSWQgbm90IHZhbGlkLicpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5vZGUubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBNb2RlbHZhbGlkYXRpb25FcnJvcignTmFtZSBub3QgdmFsaWQuJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygbm9kZS54ICE9PSAnbnVtYmVyJyB8fCBub2RlLnggPCAwIHx8IE1hdGgucm91bmQobm9kZS54KSAhPT0gbm9kZS54KSB7XG4gICAgICB0aHJvdyBuZXcgTW9kZWx2YWxpZGF0aW9uRXJyb3IoJ0Nvb3JkaW5hdGVzIG5vdCB2YWxpZC4nKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBub2RlLnkgIT09ICdudW1iZXInIHx8IG5vZGUueSA8IDAgfHwgTWF0aC5yb3VuZChub2RlLnkpICE9PSBub2RlLnkpIHtcbiAgICAgIHRocm93IG5ldyBNb2RlbHZhbGlkYXRpb25FcnJvcignQ29vcmRpbmF0ZXMgbm90IHZhbGlkLicpO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZS5jb25uZWN0b3JzKSkge1xuICAgICAgdGhyb3cgbmV3IE1vZGVsdmFsaWRhdGlvbkVycm9yKCdDb25uZWN0b3JzIG5vdCB2YWxpZC4nKTtcbiAgICB9XG4gICAgbm9kZS5jb25uZWN0b3JzLmZvckVhY2goKGNvbm5lY3RvcikgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbm5lY3Rvcihjb25uZWN0b3IpO1xuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsaWRhdGVFZGdlcyhlZGdlczogQXJyYXk8RmNFZGdlPiwgbm9kZXM6IEFycmF5PEZjTm9kZT4pOiBBcnJheTxGY0VkZ2U+IHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLl92YWxpZGF0ZUVkZ2UoZWRnZSwgbm9kZXMpO1xuICAgIH0pO1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UxLCBpbmRleDEpID0+IHtcbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UyLCBpbmRleDIpID0+IHtcbiAgICAgICAgaWYgKGluZGV4MSAhPT0gaW5kZXgyKSB7XG4gICAgICAgICAgaWYgKChlZGdlMS5zb3VyY2UgPT09IGVkZ2UyLnNvdXJjZSAmJiBlZGdlMS5kZXN0aW5hdGlvbiA9PT0gZWRnZTIuZGVzdGluYXRpb24pIHx8XG4gICAgICAgICAgICAoZWRnZTEuc291cmNlID09PSBlZGdlMi5kZXN0aW5hdGlvbiAmJiBlZGdlMS5kZXN0aW5hdGlvbiA9PT0gZWRnZTIuc291cmNlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1vZGVsdmFsaWRhdGlvbkVycm9yKCdEdXBsaWNhdGVkIGVkZ2UuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoZmNUb3BTb3J0KHtub2RlcywgZWRnZXN9KSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IE1vZGVsdmFsaWRhdGlvbkVycm9yKCdHcmFwaCBoYXMgYSBjaXJjbGUuJyk7XG4gICAgfVxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZUVkZ2VzKGVkZ2VzOiBBcnJheTxGY0VkZ2U+LCBub2RlczogQXJyYXk8RmNOb2RlPik6IEFycmF5PEZjRWRnZT4ge1xuICAgIHRoaXMudmFsaWRhdGVOb2Rlcyhub2Rlcyk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlRWRnZXMoZWRnZXMsIG5vZGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbGlkYXRlRWRnZShlZGdlOiBGY0VkZ2UsIG5vZGVzOiBBcnJheTxGY05vZGU+KTogRmNFZGdlIHtcbiAgICBpZiAoZWRnZS5zb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IE1vZGVsdmFsaWRhdGlvbkVycm9yKCdTb3VyY2Ugbm90IHZhbGlkLicpO1xuICAgIH1cbiAgICBpZiAoZWRnZS5kZXN0aW5hdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgTW9kZWx2YWxpZGF0aW9uRXJyb3IoJ0Rlc3RpbmF0aW9uIG5vdCB2YWxpZC4nKTtcbiAgICB9XG4gICAgaWYgKGVkZ2Uuc291cmNlID09PSBlZGdlLmRlc3RpbmF0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgTW9kZWx2YWxpZGF0aW9uRXJyb3IoJ0VkZ2Ugd2l0aCBzYW1lIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gY29ubmVjdG9ycy4nKTtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlTm9kZSA9IG5vZGVzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5jb25uZWN0b3JzLnNvbWUoKGNvbm5lY3RvcikgPT4gY29ubmVjdG9yLmlkID09PSBlZGdlLnNvdXJjZSkpWzBdO1xuICAgIGlmIChzb3VyY2VOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBNb2RlbHZhbGlkYXRpb25FcnJvcignU291cmNlIG5vdCB2YWxpZC4nKTtcbiAgICB9XG4gICAgY29uc3QgZGVzdGluYXRpb25Ob2RlID0gbm9kZXMuZmlsdGVyKChub2RlKSA9PiBub2RlLmNvbm5lY3RvcnMuc29tZSgoY29ubmVjdG9yKSA9PiBjb25uZWN0b3IuaWQgPT09IGVkZ2UuZGVzdGluYXRpb24pKVswXTtcbiAgICBpZiAoZGVzdGluYXRpb25Ob2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBNb2RlbHZhbGlkYXRpb25FcnJvcignRGVzdGluYXRpb24gbm90IHZhbGlkLicpO1xuICAgIH1cbiAgICBpZiAoc291cmNlTm9kZSA9PT0gZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICB0aHJvdyBuZXcgTW9kZWx2YWxpZGF0aW9uRXJyb3IoJ0VkZ2Ugd2l0aCBzYW1lIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gbm9kZXMuJyk7XG4gICAgfVxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlRWRnZShlZGdlOiBGY0VkZ2UsIG5vZGVzOiBBcnJheTxGY05vZGU+KTogRmNFZGdlIHtcbiAgICB0aGlzLnZhbGlkYXRlTm9kZXMobm9kZXMpO1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUVkZ2UoZWRnZSwgbm9kZXMpO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlQ29ubmVjdG9yKGNvbm5lY3RvcjogRmNDb25uZWN0b3IpOiBGY0Nvbm5lY3RvciB7XG4gICAgaWYgKGNvbm5lY3Rvci5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgTW9kZWx2YWxpZGF0aW9uRXJyb3IoJ0lkIG5vdCB2YWxpZC4nKTtcbiAgICB9XG4gICAgaWYgKGNvbm5lY3Rvci50eXBlID09PSB1bmRlZmluZWQgfHwgY29ubmVjdG9yLnR5cGUgPT09IG51bGwgfHwgdHlwZW9mIGNvbm5lY3Rvci50eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IE1vZGVsdmFsaWRhdGlvbkVycm9yKCdUeXBlIG5vdCB2YWxpZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbm5lY3RvcjtcbiAgfVxuXG59XG4iXX0=